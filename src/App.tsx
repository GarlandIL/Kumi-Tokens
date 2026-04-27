import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

function App() {
  return (
    <div style={{ padding: 'var(--space-lg)', fontFamily: 'var(--font-family-base)' }}>
      <h1>KumiUI – Tokens & Components</h1>

      <Card>
        <h2>Welcome to your design system</h2>
        <p>This card is using the same tokens as the buttons below.</p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;