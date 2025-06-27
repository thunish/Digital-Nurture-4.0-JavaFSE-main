package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class MyServiceTest {
    @Test
    public void testExternalApi() {
        // Step 1: Create a mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the getData method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use the mock in MyService
        MyService service = new MyService(mockApi);

        // Act & Assert
        assertEquals("Mock Data", service.fetchData());
    }
}
