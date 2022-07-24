import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  tableStocks = () => {
    const { stocks } = this.props;
    return stocks.length > 0 && (
      stocks.map(({ id, name, value }) => (
        <tr key={ id } id={ id }>
          <td>{ id }</td>
          <td>{ name }</td>
          <td>{ parseFloat(value).toFixed(2) }</td>
          {/* <td>{ this.nameCurrency(currency) }</td>
          <td>{ this.deleteButton(id) }</td> */}
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
              <th>ID</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Ações</th>
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
  dispatch: PropTypes.func.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  stocks: () => [],
};

const mapStateToProps = ({ stocks }) => ({
  stocks: stocks.stocks,
});

export default connect(mapStateToProps, null)(Table);
