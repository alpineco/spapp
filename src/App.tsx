import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  useEffect(() => {
    const loadUsers = async () => {
      fetch(`https://alpinecoresolutions.sharepoint.com/sites/CustomApps/_api/web/lists/getbytitle(%27GuitarList%27)/items`, {
        headers: {
          'Accept': 'application/json;odata=verbose',
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYWxwaW5lY29yZXNvbHV0aW9ucy5zaGFyZXBvaW50LmNvbUBlZTQ3M2JiMC05NWE1LTQ4OTgtODFhOC02ZGQxNzA5NWRlNmUiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAZWU0NzNiYjAtOTVhNS00ODk4LTgxYTgtNmRkMTcwOTVkZTZlIiwiaWF0IjoxNjk3MjQ5MTkxLCJuYmYiOjE2OTcyNDkxOTEsImV4cCI6MTY5NzMzNTg5MSwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEBlZTQ3M2JiMC05NWE1LTQ4OTgtODFhOC02ZGQxNzA5NWRlNmUiLCJuYW1laWQiOiJhYzliNDBiMC1iODA5LTQ1YWQtYjQ4ZS1hNzQ5YTYzOWZhZWFAZWU0NzNiYjAtOTVhNS00ODk4LTgxYTgtNmRkMTcwOTVkZTZlIiwib2lkIjoiYmQ1MTJkZDAtODk0YS00MTU4LTk1NGQtMDExOGIyYWU0ZWRkIiwic3ViIjoiYmQ1MTJkZDAtODk0YS00MTU4LTk1NGQtMDExOGIyYWU0ZWRkIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.a6_Wmx19-h2_dzxIBPRPuEQF-CLHxGzPn244o6t3Rtj81drAbsyEuZENzLhM5D6W3T_NouFxKAFpDDudcrW-yJ1cZ9k-WFDtnX9s9EAVRiDkYGahuAcS6qIDzcfu4PiUufz9rbkBAWGU1pyVFlQ48alNo7B_7LDFkWKBDs6bUGrlHu9gUm2Y70V1hc038HxU1C5bOfHN4bg_RM0fF6WTGb7CV0OhTfJ_7IS1E33rV9tdX16C3BcQttimxdMdM6xzQXrxsOtOcVrP4ScTId0WY4ktEgEZLJK84KkPXckQH_I9Fy5A4oQTklAI_cjYhbTAmzjCU9ymsKrwb6J-zVy28g`,
        }});
      };
  
      loadUsers();
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
