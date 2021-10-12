import {getFirestore, doc} from 'firebase/firestore';

//connect to firestore
const firestore = getFirestore();

console.log("yoo this wroks");

function writeNewUser() {
    const docData = {
        f_name: 'harsha',
        job_title: 'data scientist',
        l_name: 'payidiparty',
        profile_pic: '',
        user_id: '123'
    }
    setDoc(Users, docData);
}

writeNewUser();