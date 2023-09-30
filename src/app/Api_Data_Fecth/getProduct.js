export const getProduct = async () => {
    const res = await fetch('https://dummyjson.com/products')
    if(!res.ok){
      console.log('Nhi Chala');
    }
    return res.json();
}

