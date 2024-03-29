import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const GameDetailsComponent = ({ game, blockNumber }) => {
  const totalWin = (
    (game.deposit * game.config.participantsNumber) -
    (game.deposit * game.config.winnersNumber)
  ).toFixed(2);

  const toEachWinner = (
    (
      (game.deposit * game.config.participantsNumber) -
      (game.deposit * game.config.winnersNumber)
    ) / game.config.winnersNumber
  ).toFixed(2);

  return (
    <div>
      <h1>Game {game.id}</h1>

      <ul className="list-unstyled lead">
        <li>
          <i className="fa fa-stopwatch"/> Deadline{' '}
          {' ' + (game.deadline - blockNumber)} block
        </li>
        <li>
          <i className="fa fa-users"/> Participants
          {' ' + game.commitCounter} of
          {' ' + game.config.participantsNumber}
        </li>
        <li>
          <i className="fa fa-trophy"/> Winners
          {' ' + game.config.winnersNumber + ' '}
        </li>
        <li><hr/></li>
        <li>
          Deposit
          {' ' + game.deposit + ' '}
          <i className="fab fa-ethereum"/> ETH
        </li>
        <li>
          Total win
          {' ' + totalWin + ' '}
          <i className="fab fa-ethereum"/> ETH<br/>
          <small className="text-info">
            {
              toEachWinner + ' '
            }
            ETH to each winner
          </small>
        </li>
        <li><hr/></li>
        <li>
          <i className="fa fa-sign-in-alt"/> Commits
          {' ' + game.commitCounter}
        </li>
        <li>
          <i className="fa fa-clipboard-check"/> Reveals
          {' ' + game.revealCounter}
        </li>
      </ul>
    </div>
  );
}

GameDetailsComponent.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blockNumber: state.blockchain.network.blockNumber
});

const GameDetails = connect(
  mapStateToProps, null
)(GameDetailsComponent);

export default GameDetails;
