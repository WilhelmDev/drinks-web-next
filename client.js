import { createClient } from "@sanity/client";


export const client = createClient({
    projectId:process.env.PROJECT_ID,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-03-30',
    token: process.env.TOKEN_PROJECT
})

export async function getRum() {
    const drinksRum = await client.fetch('*[_type == "drinks" && drink_type[0] == "rum"]')
    return drinksRum
}

export async function getWhiskey() {
    const drinksWhiskey = await client.fetch('*[_type == "drinks" && drink_type[0] == "whiskey"]')
    return drinksWhiskey
}

export async function getProduct(url) {
    const bottleData = await client.fetch(`*[_type == "drinks" && url_product.current == '${url}'][0]`)
    return bottleData
}

export async function getAllBottles() {
    const bottleData = await client.fetch(`*[_type == "drinks"]`)
    return bottleData
}