import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Input } from './components/Input/Input';
import { Alert } from './components/Alert/Alert';

function App() {
  return (
    <div style={{ padding: 'var(--space-lg)', fontFamily: 'var(--font-family-base)' }}>
      <h1>KumiUI – Semantic Alerts</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <Alert variant="success" title="Success!">
          Your changes have been saved.
        </Alert>
        <Alert variant="warning" title="Warning">
          Your session will expire in 5 minutes.
        </Alert>
        <Alert variant="error" title="Error" dismissible onDismiss={() => console.log('dismissed')}>
          Unable to save. Please try again.
        </Alert>
        <Alert variant="info" title="Update available">
          A new version of the system is ready. <a href="#">Learn more</a>.
        </Alert>
      </div>

      <Card>
        <h2>Sign In</h2>
        <Input label="Email" placeholder="you@example.com" />
        <div style={{ marginTop: 'var(--space-md)' }}>
          <Button>Sign In</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;