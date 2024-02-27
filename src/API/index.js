import axios from 'axios'

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/JMace88/players/'

export const getAllPlayers = async()=>{
const {data} = await axios.get(API_URL)
return data.data.players
}

export const getSinglePlayer = async(playerId) => {
const {data} = await axios.get(API_URL + playerId)
return data.data.player
}

export const deletePlayer = async(playerId) => {
    await axios.delete(API_URL + playerId)
}