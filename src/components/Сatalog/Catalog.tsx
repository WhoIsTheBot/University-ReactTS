import React from 'react';
import photo3 from '../../assets/photo/icon/search.png';
import { ProductItem } from '../../App';

interface CatalogProps {
  
  addedItems: { [key: number]: boolean }; // Prop for tracking added items
  onToggleItem: (item: ProductItem) => void; // Prop for toggling item state
}

function Catalog({addedItems, onToggleItem }: CatalogProps) {
  const [items, setItems] = React.useState<ProductItem[]>([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://66e17e2ac831c8811b55323d.mockapi.io/Products')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="shop">
      <div className="search">
        <h2 className="products-title">
          {searchValue ? `Search on "${searchValue}"` : 'All Plants'}
        </h2>
        <div className="search-block">
          <img src={photo3} width="18" height="18" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
          {searchValue && (
            <button onClick={() => setSearchValue('')} className="btn-search">
              ×
            </button>
          )}
        </div>
      </div>
      <div className="products">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((x) => (
            <div className="product" key={x.id}>
              <img className="photo-product" src={x.imageUrl} alt={x.name} />
              <p className="product-title">{x.name}</p>
              <div className="product-info">
                <span>${x.price}</span>
                <button
                  className={addedItems[x.id] ? 'btn-bought' : 'btn-buy'}
                  onClick={() => onToggleItem(x)}
                >
                  {addedItems[x.id] ? 'Added to Bag' : 'Add to Bag'}
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Catalog;
