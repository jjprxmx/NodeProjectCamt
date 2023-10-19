const Seller = require('../../model/Seller');

async function getSeller(req, res) {
    try {
        const sellers = await Seller.findAll();
        res.status(200).send(sellers);
    } catch (error) {
        console.error("Error retrieving sellers:", error);
        res.status(500).send("Error retrieving sellers");
    }
}


async function createSeller(req, res) {
    try {
        const { seller_id, bank_account_number, Identity, namebank, id, id_card_number } = req.body;
        const seller = await Seller.create({
            seller_id,
            bank_account_number,
            Identity,
            namebank,
            id,
            id_card_number
        });
        res.status(200).send(seller);
    }
    catch (error) {
        console.error("Error creating seller:", error);
        res.status(500).send("Error creating seller");
    }
}

module.exports = { 
    getSeller, 
    createSeller 
};