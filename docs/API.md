# API Documentation

## Authentication

### Login
- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticates a user and returns a token.
- **Request Body**:
  - `username`: string
  - `password`: string
- **Response**:
  - `token`: string

### Logout
- **Endpoint**: `POST /api/auth/logout`
- **Description**: Logs out the user, invalidating the token.

## Escrow

### Create Escrow
- **Endpoint**: `POST /api/escrow`
- **Description**: Creates a new escrow transaction.
- **Request Body**:
  - `amount`: number
  - `buyerId`: string
  - `sellerId`: string
- **Response**:
  - `escrowId`: string

### Retrieve Escrow
- **Endpoint**: `GET /api/escrow/{escrowId}`
- **Description**: Retrieves details about a specific escrow transaction.

## Payments

### Create Payment
- **Endpoint**: `POST /api/payments`
- **Description**: Initiates a payment for an escrow.
- **Request Body**:
  - `escrowId`: string
  - `amount`: number
- **Response**:
  - `paymentId`: string

### Retrieve Payment
- **Endpoint**: `GET /api/payments/{paymentId}`
- **Description**: Retrieves details about a specific payment.

## Disputes

### Create Dispute
- **Endpoint**: `POST /api/disputes`
- **Description**: Creates a dispute regarding an escrow transaction.
- **Request Body**:
  - `escrowId`: string
  - `reason`: string
- **Response**:
  - `disputeId`: string

### Retrieve Dispute
- **Endpoint**: `GET /api/disputes/{disputeId}`
- **Description**: Retrieves details about a specific dispute.