const btn = document.querySelector('.getProductsInfoBtn');

const msg = 'To start the loading of products press the button and open console (F12, or RCM + inspect)';

alert(msg);

function getProducts() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Headphones" }
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
}

function getReviews(productId) {
  const reviews = {
    1: [{ id: 501, text: "Great laptop!" }],
    2: [],
    3: [{ id: 503, text: "Nice sound quality" }, { id: 504, text: "Comfortable" }]
  };
  return new Promise(resolve => {
    setTimeout(() => resolve(reviews[productId] || []), 700);
  });
}

function getReviewerName(reviewId) {
  const names = {
    501: "Alice",
    503: "Bob",
    504: "Charlie"
  };
  return new Promise(resolve => {
    setTimeout(() => resolve(names[reviewId] || "Anonymous"), 500);
  });
}

async function userReviews () {
    btn.className = 'clicked';
    btn.textContent = 'Ouch! 😣';
    const products = await getProducts();

    for (const product of products) {
        console.log(`Product: ${product.name} 👀`)
        const reviews = await getReviews(product.id);
        console.log(`Reviews: ${reviews.length} ⚡`);
        if (reviews.length > 0) {
            const firstId = reviews[0].id;
            const username = await getReviewerName(firstId);
            console.log(`First reviewed by ${username}`);         
        }
    }
}
