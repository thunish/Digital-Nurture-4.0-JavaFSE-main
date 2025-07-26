import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name="Steve" 
        School="TINY Public School" 
        total={264} 
        goal={3} 
      />
    </div>
  );
}

export default App;
