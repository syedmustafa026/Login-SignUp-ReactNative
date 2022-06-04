import { StyleSheet } from 'react-native'
let style;
export default style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#019386'
  },
  Header: {
    height: 200,
    backgroundColor: '#019386',
    justifyContent: 'center',

  },
  headingtext: {
    fontSize: 32,
    color: '#fff',
    margin: 15,
    marginTop: 80
  },
  form: {
    padding: 25,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#fff',
    height: 577,
  },
  text: {
    color: '#7A8A93',
     fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10
  },
  inputBox: {
    flexDirection: 'row',
    width: "100%",
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 0.5,
    
    borderBottomColor: 'grey',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  input: {
    marginLeft: 5,
    marginTop: 3,
    width: 250,
    
  },
  eye: {
    position: 'absolute',
    right: 10,
  },
  buttonSec: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  buttonFilled: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 60,
    backgroundColor: '#08bfaf',
    borderRadius: 20,
  },
  buttonOutlined: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 60,
    borderColor: '#08bfaf',
    borderWidth: 2,
    marginVertical: 10,
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  forgot: {
    fontWeight: 'bold',
    color: '#019386',
    marginVertical: 10
  }
})