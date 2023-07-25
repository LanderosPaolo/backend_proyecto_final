require('dotenv').config();
const query = require('../models/cartModels'); //addToCart

const postCart = async (req, res) => {
    try {
        const datosBody = req.body;
        const { id_usuario } = req.datosToken;
        // console.log(datosBody);
        detalle_final=await query.addToCart(id_usuario, datosBody);
        return res.status(200).json({ mensaje: 'Orden de compra generada correctamente',
        detalle_final: detalle_final });
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

const getOrdenes = async (req, res) => {
    try {
        const products = await query.ordenesCompras()
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al obtener las ordenes de compra' });
    }
}
const getEstados = async (req, res) => {
    try {
        const estados = await query.obtenerEstados()
        return res.status(200).json(estados);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al obtener los estados' });
    }
}
const putEstado = async (req, res) => {
    try {
        const datosBody = req.body;
        const { id_usuario } = req.datosToken;
        console.log(datosBody);
        orden_compra_nueva=await query.changeEstado(id_usuario, datosBody);
        return res.status(200).json(orden_compra_nueva);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

module.exports = {
    postCart,
    getOrdenes,
    putEstado,
    getEstados
}