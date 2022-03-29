import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id : 'p1',
    price: 6,
    title: 'Godfather I',
    description: 'The first Godfather movie.'  
  },
  { id : 'p2',
    price: 500,
    title: 'ASUS Laptop',
    description: 'ASUS Laptop useful for gaming.'  
  },
  { id : 'p3',
    price: 99,
    title: 'TV',
    description: 'Samsung ambilight TV.'  
  },
  { id : 'p4',
    price: 425,
    title: 'PS5',
    description: 'The latest Playstation gaming console.'  
  },
  { id : 'p5',
    price: 50,
    title: 'Hajduk jersey',
    description: 'HNK Hajduk Split official kit for 2022.'  
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
        <ProductItem 
        key= {product.id}
          id = {product.id}
          title= {product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
