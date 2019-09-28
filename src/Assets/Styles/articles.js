import { StyleSheet, Dimensions } from 'react-native'

const entryBorderRadius = 8;

export default articles = StyleSheet.create({
  mainSection: {
    flex: 1,
    flexDirection: 'column',
    marginTop: -10
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imageContainer: {
    height: 180,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column',
    height: 100,
    padding: 5
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',

  },
  subTitle: {
    flex: 1,
    fontStyle: 'italic',
    flexWrap: 'nowrap'
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