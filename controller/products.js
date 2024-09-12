const productScheme = require("../models/productsSchema")

const getAllProducts = async (req, res) => {
    const { company, name, sort,select } = req.query;
    const queryObject = {};

    if (company) {

        queryObject.company = company;
    }

    if (name) {

        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiUrl = productScheme.find(queryObject)

    if (sort) {

        let sorting = sort.replace(",", " ")
        apiUrl = apiUrl.sort(sorting);
    }

    if (select) {
        let selectval = select.split(",").join(" ");
        apiUrl = apiUrl.select(selectval);
    }

    let page = req.query.page || 1;
    let limit =req.query.limit || 3;

    let skip =(page -1 ) * limit;

    apiUrl=apiUrl.skip(skip).limit(limit);

    const products = await apiUrl;
    res.status(200).json({ products, nbits:products.length });
}


module.exports = [getAllProducts]