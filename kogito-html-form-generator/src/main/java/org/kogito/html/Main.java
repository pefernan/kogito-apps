package org.kogito.html;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.kogito.html.visit.SchemaVisitor;

public class Main {

    public static void main(String[] args) {

        ObjectMapper mapper = new ObjectMapper();

        try {
            JsonNode schema = mapper.readTree(new InputStreamReader(Main.class.getResourceAsStream("/schemas/travels_ConfirmTravel.json")));

            SchemaVisitor visitor = new SchemaVisitor();

            System.out.println(schema);
            visitor.visit(schema);
        } catch (IOException e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();
        Map result = gson.fromJson(new InputStreamReader(Main.class.getResourceAsStream("/schemas/travels_ConfirmTravel.json")), Map.class);

        System.out.println(result);
    }

}
