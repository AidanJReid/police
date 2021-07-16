fetch('https://data.police.uk/api/crimes-street-dates')
    .then(res => res.json())
    .then(data => console.log(data))