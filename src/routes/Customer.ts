import express from 'express';
import { app, knex } from '../index';
import { Customer, UnsavedCustomer } from '../types/Customer/Customer';

app.post('/customer', (req, res, next) => {
    console.log('hi this is a customer!');

    const customer = req.body as UnsavedCustomer;

    // validate
    // authenticate

    // save
    knex<Customer>('customer')
        .insert(customer)
        .then((id) => {
            console.log('did the thing');
            console.log(id);

            // return success
            return res.json({ ...customer, id });
        });
});
