const Seller = require('../../model/Seller');

async function getSeller(req, res){
    res.status(200).send(Seller);
}

async function createSeller(req, res) {
    const { seller_id, bank_account_number, Identity, namebank, id, id_card_number } = req.body;
    const seller = new Seller.create({
        seller_id,
        bank_account_number,
        Identity,
        namebank,
        id,
        id_card_number
    });
    res.status(200).send(seller);
}

module.exports = { getSeller, createSeller };