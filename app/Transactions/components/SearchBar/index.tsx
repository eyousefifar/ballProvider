import React, {useEffect} from 'react';
import {TextInput, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RectButton} from "react-native-gesture-handler";

// styles
import styleGenerator from './styles';
import {Colors, H2, Icon} from "../../../ball-library";
import {useDebounce} from "use-debounce";
import {transactionsStore} from "../../store/TransactionsStore";

interface ISearchBar {
    searchText: string,
}

const SearchBar = (props:ISearchBar) => {

    const styles = styleGenerator();
    const {searchText} = props;

    const [debouncedText] = useDebounce<string>(transactionsStore.query, 600);

    useEffect( () => {
        transactionsStore.resetPagination();
        transactionsStore.getAllTransactions()
    },[debouncedText]);


    const handleChangeQuery = async (text:string) => {
        await transactionsStore.setQuery(text);
        // TODO : consider search length for search later
        // if (text.length > 2){
        //     await searchStoreClass.getAllReserveList()
        // }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar_container_area}>
                <View style={styles.searchBar_container}>

                    <View style={styles.right_section}>
                        <Icon type={'antDesign'} name={'search1'} size={25} color={Colors.titleBarLines}/>
                    </View>

                    <TextInput style={styles.middle_section}
                               placeholder={searchText}
                               value={transactionsStore.query}
                               onChangeText={handleChangeQuery}/>

                </View>
            </View>
        </View>
    );
};

export default observer(SearchBar);
