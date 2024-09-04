import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import useDatabase from './usedatabase';


interface DataItem {
    id: string;
    text: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}

const useFetchData = (collectionName: string) => {
    const { firestoreDB } = useDatabase();
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // const querySet = query(collection(firestoreDB, 'messages'), orderBy('createdAt'));
        const querySet = query(collection(firestoreDB, 'messages'));
        console.log(firestoreDB);

        const snapshot = onSnapshot(querySet,
            (snapshot) => {
                // const fetchedData: DataItem[] = snapshot.docs.map((doc) => ({
                //     id: doc.id,
                //     ...doc.data()
                // })) as DataItem[];
                // setData(fetchedData);
                // setLoading(false);
                console.log(snapshot.docs);

            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );
        return () => snapshot();
    }, [firestoreDB, collectionName]);

    return { data, loading, error };
}

export default useFetchData;
