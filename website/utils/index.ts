
export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'aef570598bmsha70e2d8ba7a65e7p1661dfjsnfecf326cbc07',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}


const response = await fetch 
('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers,});

const result = await response.json();

return result;

}