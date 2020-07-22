const paginatedResults = Model => {
    return async (req, res, next) => {
        if (!req.query.page || !req.query.limit) return;
        // Get page and limit query from the request
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        // Create startIndex and endIndex for searching
        const start = (page - 1) * limit;
        const end = page * limit;
        const resutls = {}; // results object

        // Check if there are more data
        if (end < (await Model.countDocuments().exec())) {
            resutls.next = {
                page: page + 1,
                limit: limit,
            };
        }

        // Keep track of previous results
        if (start > 0) {
            resutls.previous = {
                page: page - 1,
                limit: limit,
            };
        }

        try {
            // Final results
            resutls.tickets = await Model.find() // Find all model results exists in database
                .limit(limit) // Limit returned results
                .skip(start) // Skip from start index every time send the request
                .exec();
            res.paginatedResults = resutls;
            next();
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    };
};

module.exports = paginatedResults;
