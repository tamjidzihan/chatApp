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
    const { firestore } = useDatabase();
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const q = query(collection(firestore, collectionName), orderBy('createdAt'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const fetchedData: DataItem[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })) as DataItem[];
                setData(fetchedData);
                setLoading(false);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [firestore, collectionName]);

    return { data, loading, error };
}

export default useFetchData;
