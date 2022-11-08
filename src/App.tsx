import {View, Text} from 'react-native'
import './App.css';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TemplateScreen = (props: any) => {
  return <View>{props.children}</View>
}

const Page1 = () => <TemplateScreen><Text>Page1</Text><Link to={{ screen: 'Page2'}}>Go to Page2</Link></TemplateScreen>
const Page2 = () => <TemplateScreen><Text>Page2</Text><Link to={{ screen: 'Page3'}}>Go to Page3</Link></TemplateScreen>
const Page3 = () => <TemplateScreen><Text>Page3</Text><Link to={{ screen: 'Page1'}}>Go to Page1</Link></TemplateScreen>

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer linking={{
      prefixes: [],
      config: {
        screens: {
          Page1: 'Page_1',
          Page2: 'Page_2',
          Page3: 'Page_3'
        },
      },
    }} fallback={<div>Loading...</div>}>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
