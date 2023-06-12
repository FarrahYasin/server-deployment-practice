'use strict'

const supertest = require('supertest');
const {app} = require('../server');
const req = supertest(app);


describe('Server test',()=>{
    // test case1
    it('handle not found page', async()=>{
        const res = await req.get('/items');
        expect(res.status).toEqual(404)
    });
    //test case2
    it('handle the root path', async()=>{
       const res = await req.get('/');
       expect(res.status).toEqual(200);
       expect(res.body.message).toEqual('welcome to home page');
    });
   //test case3
    it('handle errors', async ()=>{
        const res = await req.get('/bad');
        // console.log(res)
        expect(res.status).toEqual(500);
        expect(res.body.route).toEqual('/bad');

    })

});




