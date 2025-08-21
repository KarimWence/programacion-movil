import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskItem({ title }) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{ title }</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="edit" size={20} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        height: 'auto',
    },
    taskTitle: {
        fontSize: 16,
        color: "#333",
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 10,
    },
    button: {
        marginLeft: 10,
    }
})