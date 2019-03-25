const express = require("express");
const router = express.Router();
const url = require('url');
const shopsModel = require("../models/Shop").shops;
const shopData = require('../../../mwbyd/src/assets/json/shopData.json')

router.get("/",(req,res)=>{
    let data = '',
        shopList = [];

    shopsModel.find({},(err,result)=>{
        result.forEach(v=>{
            let obj = {name,address,frontImg,avgScore,avgPrice} = v;
            shopList.push(obj);           
        })
        data={code:0,shopList};
        res.status(200),
        res.json(data)
        return 
    });
   
    // 批量导入数据到数据库
    // shopData.forEach(v=>{
    //     shopsModel.create({
    //         name: v.name,
    //         address: v.address,
    //         frontImg: v.frontImg,
    //         avgScore: v.avgScore,
    //         avgPrice: v.avgPrice,
    //     }) 
    // })
    // console.log('upload success')
})

router.get('/detail',(req,res)=>{
    let data = '',
        id = req.query.shop_id;
    shopsModel.findById(id,(err,result)=>{
        data={code:0,result};
        res.status(200),
        res.json(data)
        return 
    });
})

// router.post("/",(req,res)=>{
//     let data = ''; 
//     let {name, address, avgScore, frontImg, avgPrice} = req.body;
//     shopsModel.create({
//         name,
//         address,
//         frontImg,
//         avgScore,
//         avgPrice,
//     }) 
//     console.log('create shop success')
  
// })

module.exports = router;