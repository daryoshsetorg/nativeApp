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
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  imageContainer: {
    flex: 4,

  },
  image: {
    flex: 1,
    width: '100%',
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginTop: 2
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    flex: 1,
    fontStyle: 'italic'
  },
  oprationContainre: {
    flex: 2,
    flexDirection: 'row'
  },
  oprationItems: {
    flex: 1,
    margin: 2
  }
})