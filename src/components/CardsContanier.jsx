import PropTypes from 'prop-types';

const CardsContanier = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {children}
    </div>
  );
};

CardsContanier.propTypes = {
  children: PropTypes.node,
};
export default CardsContanier;
