create Database LoanApplication;

alter Table Loans
add AmountPaid int;

SELECT * FROM Members;

CREATE TABLE Members (
    MemberID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DateOfBirth DATE,
    Email NVARCHAR(100) UNIQUE,
    Password NVARCHAR(100)
);

CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY IDENTITY(1,1),
    MemberID INT FOREIGN KEY REFERENCES Members(MemberID),
    AccountType NVARCHAR(50),
    Balance DECIMAL(18, 2)
);

CREATE TABLE Loans (
    LoanID INT PRIMARY KEY IDENTITY(1,1),
    AccountID INT FOREIGN KEY REFERENCES Accounts(AccountID),
    LoanAmount DECIMAL(18, 2),
    LoanTerm INT, --months
    InterestRate DECIMAL(5, 2),
    Status NVARCHAR(50)
);

CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY IDENTITY(1,1),
    AccountID INT FOREIGN KEY REFERENCES Accounts(AccountID),
    Amount DECIMAL(18, 2),
    TransactionType NVARCHAR(50),
    TransactionDate DATETIME
);