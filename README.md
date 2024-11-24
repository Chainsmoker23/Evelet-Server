(Evelet-Server)
Evelet-Server is the backend for the Evelet platform, a blockchain-powered event ticketing solution. This backend provides APIs for seamless integration between the frontend application and blockchain functionalities, ensuring secure, transparent, and efficient ticketing transactions.

Features:
Token Management: Integrates the EveletToken smart contract to handle token-related operations like minting, burning, and supply reduction.
User Authentication: Implements authentication and authorization mechanisms for secure access.
Blockchain Integration: Utilizes the Ethereum Sepolia testnet for smart contract interactions.
API Endpoints: Provides RESTful APIs for frontend interactions with event, user, and token data.
Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for creating APIs.
Hardhat: Development environment for Ethereum smart contracts.
Solidity: Smart contract programming language.
Infura: Ethereum node provider for blockchain interaction.

API Documentation
Authentication:
POST /login: User login.
POST /logout: User logout.
Token Operations:
GET /token/supply: Fetch total token supply.
POST /token/reduce: Reduce token supply.
Event Management:
GET /events: Retrieve all events.
POST /events: Create a new event.

(Smart Contract Overview)

Contract Name: EveletToken
Symbol: EVT
Total Supply: 10,000,000 EVT
Reduction Mechanism: Burn 1,000 EVT tokens every 2 years, subject to supply availability.

(Contributing)
Feel free to contribute to improve the backend functionality. Submit a pull request or open an issue for any bugs or feature requests.

