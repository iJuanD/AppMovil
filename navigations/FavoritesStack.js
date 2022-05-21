
import React from 'react'
import Favorites from '../screens/Favorites';

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Favoritos"
            component={Favorites}
            options={{ title: "Inicio"}}
        />
    </Stack.Navigator>
  );
}