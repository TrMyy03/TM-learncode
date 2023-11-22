import {IFakeProductRating1 } from "./interfaces/FakeProductRating1";
export interface IFakeProduct1{
id:number,
title:string,
price:number,
description:string,
category:string,
image:string ,
rate:IFakeProductRating1
}