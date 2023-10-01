export default async function productApi() {
    const res = await fetch(`https://dummyjson.com/products/`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
