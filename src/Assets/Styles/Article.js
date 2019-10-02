import { StyleSheet, Dimensions } from 'react-native'

export default article = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex:10,
    width:30,
    height:30,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },
  itemContainer: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    minHeight: 300,
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    minHeight:50,
    fontSize: 20,
    fontWeight:'300',
    flexWrap: 'nowrap',
    direction: 'rtl',
    textAlign: 'right',
    margin:5,

  },
  subTitle: {
    minHeight:200,
    fontStyle: 'italic',
    flexWrap: 'nowrap',
    direction: 'rtl',
    textAlign: 'right',
    margin:5,
    lineHeight:20,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  oprationContainre: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    borderTopColor: '#dddd',
    borderTopWidth: 1
  },
  oprationItems: {
    margin: 2,
    width: 40,
    alignItems: 'center',
  },
  dateItems: {
    flex: 1,
    flexWrap: 'nowrap'
  },
  spineerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})