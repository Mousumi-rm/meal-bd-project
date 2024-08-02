export const foodApi = async()=>{
    const rsc = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await rsc.json();
    return data.categories
}