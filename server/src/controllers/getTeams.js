const axios = require('axios');
const { Team } = require('../db');

const getTeams = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/drivers');

    teams = [];

    for (const driver of response.data) {
      if (driver.teams) {
        let rawTeam = driver.teams;
        let splitTeam = rawTeam.split(',');
        teams.push(splitTeam);
      }
    }

    let joinedTeam = [];
    for (const team of teams) {
      joinedTeam = [...joinedTeam, ...team];
    }

    let trimmedTeam = [];
    for (const team of joinedTeam) {
      trimmedTeam.push(team.trim());
    }

    let finalTeam = [];
    trimmedTeam.forEach(team => {
      if (!finalTeam.includes(team)) {
        finalTeam.push(team);
      }
    });

    for (const team of finalTeam) {
      await Team.findOrCreate({
        where: { nombre: team },
      });
    }

    res.status(200).send(finalTeam);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getTeams;
