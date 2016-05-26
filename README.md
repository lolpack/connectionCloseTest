# connectionCloseTest
Determine if your server is holding on to your tcp connection

The `Connection: keep-alive` header is treated different between server frameworks and load balancers. This helps you determine if the header is being respected or if the connection is closed as soon as the data is done being sent.
