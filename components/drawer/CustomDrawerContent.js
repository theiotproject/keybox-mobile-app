import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Menu, Divider, Provider } from 'react-native-paper';
import { logo } from '../../assets';
import { Image } from 'react-native';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import CustomSelectDropdown from '../CustomSelectDropdown';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const CustomDrawerContent = (props) => {
    const [keybox, setKeybox] = useState('Keybox 1');
    const [menuVisible, setMenuVisible] = useState(false);

    const [keyBoxList, setKeyboxList] = useState(["Tytus", "Romek", "Atomek"]);

    const handleKeyboxSelect = (selectedKeybox) => {
        setKeybox(selectedKeybox);
        alert(selectedKeybox)
    };

    return (
        <DrawerContentScrollView {...props} style={styles.drawerContentContainer}>
            <View style={styles.contentContainer}>

                <Ionicons name='reorder-three-outline' style={styles.hamburgerIcon} />

                {/* Profile Container */}
                <View style={styles.profileContainer}>
                    {/* Small profile picture */}
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={logo}
                            style={styles.profileImage}
                        />
                    </View>

                    {/* User name */}
                    <Text style={styles.userName}>John Doe</Text>
                </View>

                {/* Select Input */}
                <View style={styles.selectContainer}>
                    <CustomSelectDropdown list={keyBoxList} selectText={"Select Keybox"} handleSelect={(selectedItem) => handleKeyboxSelect(selectedItem)} allowSearch={false}/>
                </View>

                {/* Custom Drawer Items */}
                <View style={styles.drawerItemsContainer}>
                    <DrawerItem
                        style={styles.drawerItem}
                        label="Cards"
                        labelStyle={styles.drawerItemLabel}
                        onPress={() => props.navigation.navigate('Cards')}
                        icon={({ color, size }) => (
                            <Ionicons name="card" size={size} color={color} />
                        )}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label="Key Slots"
                        labelStyle={styles.drawerItemLabel}
                        onPress={() => props.navigation.navigate('Key Slots')}
                        icon={({ color, size }) => (
                            <Ionicons name="folder" size={size} color={color} />
                        )}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label="Events"
                        labelStyle={styles.drawerItemLabel}
                        onPress={() => props.navigation.navigate('Events')}
                        icon={({ color, size }) => (
                            <Ionicons name="time" size={size} color={color} />
                        )}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label="Settings"
                        labelStyle={styles.drawerItemLabel}
                        onPress={() => props.navigation.navigate('Settings')}
                        icon={({ color, size }) => (
                            <Ionicons name="settings" size={size} color={color} />
                        )}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label="Tester"
                        labelStyle={styles.drawerItemLabel}
                        onPress={() => props.navigation.navigate('Tester')}
                        icon={({ color, size }) => (
                            <Ionicons name="warning" size={size} color={color} />
                        )}
                    />
                </View>

                {/* Sign-Out Button */}
                <View style={styles.signOutContainer}>
                    <DrawerItem
                        style={styles.drawerItem}
                        label="Sign Out"
                        labelStyle={styles.drawerItemLabel}

                        onPress={() => {
                            // Handle sign-out
                            signOut(auth)
                        }}
                        icon={({ color, size }) => (
                            <Ionicons name="log-out" size={size} color={color} />
                        )}
                    />
                </View>
            </View>

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
  

    hamburgerIcon: {
        fontSize: 35,
        marginTop: 5,
        marginHorizontal: 10,
    },

    contentContainer: {
        // styles here
    },

    // PROFILE

    profileContainer: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    profileImageContainer: {
        width: 75,
        height: 75,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 2,  
        borderColor: '#eee',
    },

    profileImage: {
        flex: 1,
        width: 75,
        height: 75,
        resizeMode: 'contain',     
    },

    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
    },


    // SELECTION

    selectContainer: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    selectText: {
        fontSize: 16,
        color: '#333',
    },

    // DRAWER ITEMS

    drawerItemsContainer: {
        flex: 1,
    },

    drawerItem: {
        flex: 1,
    },
    
    drawerItemLabel: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    // SIGN OUT

    signOutContainer: {
        flex: 1,

    },


});

export default CustomDrawerContent;
