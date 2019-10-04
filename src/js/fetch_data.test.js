import { fetchData } from './fetch_data'

describe.skip('fetchData()',  () => {
  test('should ', () => {
    let actual = null;
    const expected = {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }

    return fetchData('https://reqres.in/api/users/2')
      .then( data => {
        expect(data).toEqual( expected );
      })

  }); 
});
