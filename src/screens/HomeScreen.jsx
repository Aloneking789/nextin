import { Text ,View ,StyleSheet} from "react-native"

export const HomeScreen= ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}> This is HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 20,
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    toggleButtonActive: {
      backgroundColor: '#f8c1c1',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    toggleButtonInactive: {
      backgroundColor: '#f0e1e1',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    toggleButtonTextActive: {
      color: '#fff',
      fontWeight: 'bold',
    },
    toggleButtonTextInactive: {
      color: '#888',
    },
    label: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: '#e6f0f5',
    },
    forgotText: {
      textAlign: 'right',
      color: '#007bff',
      marginBottom: 20,
    },
  
    loginButton: {
      backgroundColor: '#6495ed',
      borderRadius: 30,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 24,
    },
  });