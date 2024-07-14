# IP Address Management Solution

Task is to design and implement a web-based IP address management solution to allow us to record an IP  address and comment on its assignment. For example, we might create an entry for 202.92.249.111, and  label it gifts.ad-group.com.au. Or we might label it ‘Spare’, or ‘BFBC2 Server’.
The objective is to build a simple web application to provide this functionality using the following guidelines. 
This web application will allow an authenticated user to perform the following tasks:
# Log in to the system and receive an authenticated token, with all subsequent steps requiring this authenticated token.
# Add a new IP address to the database and attach a small label/comment to it. 
# Modify an IP address to change the label. 
# View an audit log of which changes have been made.
The database should record all IP addresses, associated comments/labels, and an audit trail of any additions 
or changes to the database. The data types, keys, and relationships of these database elements is your  choice. Your only restriction is that the code must work, and must confirm to the following design goals.
# Adds/changes should be not allowed if users are not authenticated.
# An audit trail should be maintained for every login, addition or change
# IP addresses must be validated as acceptable before being entered into the database
# The system should easily support the addition of new capabilities in the future with minimal effort.
