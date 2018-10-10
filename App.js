import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, FlatList} from 'react-native';


export default class App extends React.Component {
 render() {
     return (
       <View>
       <ScrollView>
         <Text> </Text>
         <Text> </Text>
         <Text> </Text>

         <Text>Olivier Bonnemaison</Text>
         <Text>olivier.bonnemaison@gmail.com</Text>
         <Text>+852 60 72 15 43</Text>
         <Text> </Text>

         <Text style={styles.sectionHeader}>Summary</Text>
        <FlatList
          data={[
          {key: 'Result oriented Agile Manager with proven success of managing front & middle office Equity Derivatives application development teams for 16 years in Europe & Asia'},
          {key: 'Strong Financial & Quantitative experience with a hands-on development background in Java, Python, MongoDB & HTML5'},
          {key: 'Hong Kong Permanent ID, available under short notice'}
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text style={styles.sectionHeader}>Experience</Text>
         <Text style={styles.sectionHeader}>HSBC</Text>
         <Text>Global Head of Front Office Tools</Text>
         <Text>Hong Kong, 2017/ 2018</Text>

         <FlatList
          data={[
             {key: 'In charge of the Front Office Tools Globally for Equity Derivatives: 20 developers in 5 locations:'},
             {key: 'Risk Visualisation'},
             {key: 'Volatility Marking'},
             {key: 'Dividend Marking'},
             {key: 'Yield Curve Fitting'},
             {key: 'We managed to develop & support a Python platform to improve global collaboration and produce state of the art analytics:'},
             {key: 'Setup the infrastructure, including MongoDB'},
             {key: 'Develop the Micro Services, UI & API'},
             {key: 'Review the code & challenge the developers'},
             {key: 'Automatically deploy to UAT/ Production'},
             {key: 'Monitor the application'},
             {key: 'Support the traders on their day to day activity'}
                 ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text style={styles.sectionHeader}>JPMorgan</Text>
         <Text>Head of Marking & Analytics Team, APAC</Text>
         <Text>Hong Kong, 2011/ 2017</Text>

         <FlatList
          data={[
             {key: 'Developed, Deployed & Support Analytics and Marking platforms to manage Volatility, Dividends, Yield Curves, Position, Risks, Client Analytics (Hit/ Miss, Trade History, Profitability, etc.); rolled out to 1000+ users globally. Adapt the global tools to the local needs. Managed 8 developers in APAC.'},
             {key: 'We achieved to replace hundred of spreadsheets by a Service Oriented Architecture. Visualisation was done through GWT/ HTML5 UI.'},
             {key: 'Volatility Parameters & Yield Curves were marked every few minutes through our server side processes'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

         <Text style={styles.sectionHeader}>BNP Paribas</Text>
         <Text>Head of Rapid Application Development Team APAC</Text>
         <Text>Hong Kong, 2008/ 2011</Text>

         <FlatList
          data={[
             {key: 'Deployed the strategic Risk System in APAC that improved Risk Management for Exotic, Delta One, IRFX & Stock Lending and Borrowing Desks.'},
             {key: 'Managed 2 Business Analysts and 15 developers in HK & Tokyo'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

         <Text>Global Head of Structuring Tech</Text>
         <Text>Paris, 2002/ 2008</Text>

         <FlatList
          data={[
             {key: 'In charge of the Structured Product Pricing Applications: Exotic, Flow, etc. '},
             {key: 'Implement a Java Based Workflow between Marketers, Traders & Middle Office.'},
             {key: 'Managed 12 developers in Paris'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text> </Text>
         <Text style={styles.sectionHeader}>Technical Skills</Text>
         <Text></Text>

         <FlatList
          data={[
             {key: 'Pop Star in Native React'},
             {key: 'Spring Boot/ Spring Cloud'},
             {key: 'MongoDB'},
             {key: 'Flask Micro Services'},
             {key: 'HTML5/ JavaScript/ AWS: HandsOnTable/ HighCharts/ DataTable/ BootStrap'},
             {key: 'Bloomberg Python BPIPE API'},
             {key: 'Reuters Elektron Java API'},
             {key: 'Jenkins PipeLine using Unit/ Integration tests & Ansible for the auto deployment'},
             {key: 'Java8'},
             {key: 'Micro Services Architecture using Jetty Embedded'},
             {key: 'GWT/ HTML5/ JavaScript Web UI'},
             {key: 'Reuters Java API'},
             {key: 'TibRV'},
             {key: 'JUnit'},
             {key: 'Teamcity'},
             {key: 'GIT/ Stash'},
             {key: 'SDLC Procedures'},
             {key: 'Intalio Workflow'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text style={styles.sectionHeader}>Functional Skills</Text>
         <Text></Text>

         <FlatList
          data={[
             {key: 'Good understanding of the business needs'},
             {key: 'Agile/ Iterative approach'},
             {key: 'Hands on Manager, keen to challenge his team technically & functionally'},
             {key: 'Passionate about the Cloud/ AWS Technologies'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text style={styles.sectionHeader}>Education</Text>
         <Text></Text>

         <FlatList
          data={[
             {key: 'ESSEC: Master of Finance, Paris, 2001 / 2002'},
             {key: 'Ecole des Mines Master of Engineering, Nancy, 1998/ 2001'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

       </ScrollView>
       </View>
     );
   }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
;
