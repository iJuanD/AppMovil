
import React from 'react'
import Search from '../screens/Search';

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Busqueda"
            component={Search}
        />
    </Stack.Navigator>
  );
}