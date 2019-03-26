const express = require("express");
const router = express.Router();
const Orders = require("../models/Order").Orders;

/**
 * @data    //用于返回到前端页面的提示内容，包含code、tips
 *            code(0:注册成功 1: 信息输入错误)
 * 
 */
router.post("/", (req, res) => {
    let data = '';  
    let { name, phone, eatTime, peopleNum, user_id } = req.body;
    //信息输入有误则直接返回错误信息
    console.log(req.body)
    if( !name || !phone || !eatTime || !peopleNum || !user_id ){
        data={code:1,tips:'信息输入有误，请确认后再次尝试'}
        res.status(200),
        res.json(data)
        return;
    }
    Orders.create({
        name,
        phone,
        eatTime,
        peopleNum,
        user_id
    })

    data={code:0,tips:'提交成功！'}
    res.status(200),
    res.json(data)
})

module.exports = router;