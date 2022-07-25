import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Table extends React.Component {
  tableStocks = () => {
    const { stocks } = this.props;
    return stocks.length > 0 && (
      stocks.map(({ id, name, value }) => (
        <tr key={ id } id={ id } className='grid grid-cols-3 justify-items-start space-x-3'>
          <td className='justify-self-center'>Imagem</td>
          <td className='flex flex-col'>
            <div>{ name }</div>
            <p className='text-sm'>{ id }</p>
          </td>
          <td className='justify-self-end flex flex-col'>
            <div>{ parseFloat(value).toFixed(2) }</div>
            <div>
              <Link 
                to={`/buyStock/${id}`}
                data-testid="link-to-draw"
                className='cursor-pointer text-center hover:text-alice hover:bg-lavender p-1.5 rounded-md bg-mauve'> 
                Comprar
              </Link>
            </div>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.tableStocks() }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  stocks: () => [],
};

const mapStateToProps = ({ stocks }) => ({
  stocks: stocks.stocks,
});

export default connect(mapStateToProps, null)(Table);
